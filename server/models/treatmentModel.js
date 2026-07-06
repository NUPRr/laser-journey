import db from "../config/db.js";

const Treatment = {

  // Dashboard data
  getTreatmentsByUser(userId) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM treatments WHERE user_id = ?`,
        [userId],
        (err, results) => {
          if (err) return reject(err);
          resolve(results);
        }
      );
    });
  },

  // Find one treatment
  getTreatment(id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM treatments WHERE id = ?`,
        [id],
        (err, results) => {
          if (err) return reject(err);
          resolve(results[0]);
        }
      );
    });
  },

  // Complete a session
  completeSession(treatmentId, sessionNumber) {
    return new Promise((resolve, reject) => {

      db.query(

        `INSERT INTO session_history
        (treatment_id, session_number, completed, completed_date)
        VALUES (?, ?, true, CURDATE())`,

        [treatmentId, sessionNumber],

        (err) => {

          if (err) return reject(err);

          db.query(

            `UPDATE treatments
            SET completed_sessions = completed_sessions + 1
            WHERE id=?`,

            [treatmentId],

            (err2) => {

              if (err2) return reject(err2);

              resolve();

            }

          );

        }

      );

    });
  },

  // Undo Session
  undoSession(treatmentId, sessionNumber) {

    return new Promise((resolve, reject) => {

      db.query(

        `DELETE FROM session_history
        WHERE treatment_id=?
        AND session_number=?`,

        [treatmentId, sessionNumber],

        (err) => {

          if (err) return reject(err);

          db.query(

            `UPDATE treatments
             SET completed_sessions =
             GREATEST(completed_sessions-1,0)
             WHERE id=?`,

            [treatmentId],

            (err2) => {

              if (err2) return reject(err2);

              resolve();

            }

          );

        }

      );

    });

  },

  // Appointment

  updateAppointment(treatmentId, appointment) {

    return new Promise((resolve, reject) => {

      db.query(

        `UPDATE treatments
        SET appointment=?
        WHERE id=?`,

        [appointment, treatmentId],

        (err) => {

          if (err) return reject(err);

          resolve();

        }

      );

    });

  }

};

export default Treatment;