import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.json(assignments);
  });

  app.get("/api/assignments/:cid", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  app.delete("/api/assignments/:cid/:aId", async (req, res) => {
    const { aId } = req.params;
    const status = await dao.deleteAssignment(aId);
    res.json(status);
  });

  app.put("/api/assignments/:cid/:aId", async (req, res) => {
    const { aId } = req.params;
    const status = await dao.updateAssignment(aId, req.body);
    res.json(status);
  });

  app.post("/api/assignments/:cid", async (req, res) => {
    const { cid } = req.params;
    try {
      const assignment = {
        ...req.body,
        course: cid
      };
      const newAssignment = await dao.createAssignment(assignment);
      res.json(newAssignment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}