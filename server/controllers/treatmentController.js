import db from "../config/db.js";

// Get all treatments
export const getTreatments = (req, res) => {

  const userId = req.user.id;

  db.query(
    "SELECT * FROM treatments WHERE user_id=?",
    [userId],
    (err, result) => {

      if (err) return res.status(500).json(err);

      res.json(result);

    }
  );

};

// Save treatment
export const saveTreatment = (req, res) => {

  const userId = req.user.id;

  const {
    body_part,
    completed_sessions,
    appointment,
  } = req.body;

  db.query(

    `INSERT INTO treatments(user_id,body_part,completed_sessions,appointment)
     VALUES(?,?,?,?)
     ON DUPLICATE KEY UPDATE
     completed_sessions=?,
     appointment=?`,

    [
      userId,
      body_part,
      completed_sessions,
      appointment,
      completed_sessions,
      appointment,
    ],

    (err) => {

      if (err)
        return res.status(500).json(err);

      // Save activity
      db.query(
        `INSERT INTO session_history(user_id,body_part,session_number)
         VALUES(?,?,?)`,
        [
          userId,
          body_part,
          completed_sessions
        ]
      );

      res.json({
        message: "Saved",
      });

    }

  );

};

// Recent Activity
export const getRecentActivity = (req, res) => {

  db.query(

    `SELECT *
     FROM session_history
     WHERE user_id=?
     ORDER BY completed_date DESC
     LIMIT 5`,

    [req.user.id],

    (err, result) => {

      if (err)
        return res.status(500).json(err);

      res.json(result);

    }

  );

};