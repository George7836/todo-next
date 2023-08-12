import Task from "../models/task";
import { Request, Response } from "express";

class TaskControllers {
  async getAllTasks(req: Request, res: Response) {
    const tasks = await Task.findAll();
    res.json(tasks);
  }

  async addTask(req: Request, res: Response) {
    const { content, done } = req.body;
    const newTask = await Task.create({
      content: content,
      done: done,
    });
    res.json(newTask);
  }

  async removeTask(req: Request, res: Response) {
    const id = req.params.id;
    const removedTask = await Task.destroy({
      where: {
        id: id,
      },
    });
    res.json(removedTask);
  }

  async updateTask(req: Request, res: Response) {
    const { taskId, content, done } = req.body;
    const id = req.params.id;
    const updatedTask = await Task.update(
      {
        content: content,
        done: done,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json(updatedTask);
  }
}

module.exports = new TaskControllers();
