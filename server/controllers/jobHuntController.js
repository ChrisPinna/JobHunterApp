import db from "../db.js";

export const getAllJobHunts = async (req, res) => {
  try {
    const allJobHunts = await db.query("select * from jobhunts");

    res.status(200).json({
      message: "Success",
      data: allJobHunts.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getJobHunt = async (req, res) => {
  try {
    const jobHunt = await db.query("select * from jobhunts where id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      message: "Success",
      data: jobHunt.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createJobHunt = async (req, res) => {
  const { title, link, description, status } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO jobhunts (title, link, description, status) VALUES ($1, $2, $3, $4) returning *",
      [title, link, description, status]
    );

    res.status(201).json({ message: "Success", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const updateJobHunt = () => {};
export const deleteJobHunt = () => {};
