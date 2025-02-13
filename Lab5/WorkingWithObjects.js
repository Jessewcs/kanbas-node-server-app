const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2024-11-21",
  completed: false,
  score: 0,
};
const module = {
  id: 1,
  name: "Introduction to Rocket Propulsion",
  description: "History of Rocket Propulsion and its Fundamentals",
  course: "Web Development",
};
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get('/lab5/module/name', (req, res) => {
    res.json(module.name);
  });
  app.get('/lab5/module/name/:newName', (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });
  app.get('/lab5/assignment/score/:newScore', (req, res) => {
    const { newScore } = req.params;
    assignment.score = newScore;
    res.json(assignment.score);
  });
  app.get('/lab5/assignment/completed/:newCompleted', (req, res) => {
    const { newCompleted } = req.params;
    assignment.completed = newCompleted;
    res.json(assignment.completed);
  });
  app.get('/lab5/module/description/:newDesc', (req, res) => {
    const { newDesc } = req.params;
    module.description = newDesc;
    res.json(module.description);
  });
}
