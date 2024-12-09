import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/:uid/enrollments", async (req, res) => {
    const { uid } = req.params;
    try {
      const courses = await dao.findCoursesForUser(uid);
      res.json(courses);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch enrollments",
        error: error.message,
      });
    }
  });

  app.get("/api/courses/:courseId/users", async (req, res) => {
    const { courseId } = req.params;
    try {
      const users = await dao.findUsersForCourse(courseId);
      res.json(users);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch enrolled users",
        error: error.message,
      });
    }
  });

  app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    try {
      const status = await dao.enrollUserInCourse(userId, courseId);
      res.json(status);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Enrollment failed",
        error: error.message,
      });
    }
  });

  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    try {
      const status = await dao.unenrollUserFromCourse(userId, courseId);
      res.json(status);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Unenrollment failed",
        error: error.message,
      });
    }
  });
}