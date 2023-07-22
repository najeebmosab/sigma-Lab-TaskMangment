package com.TaskManegment.Manegment.controllers;

import com.TaskManegment.Manegment.models.Tasks;
import com.TaskManegment.Manegment.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Tasks> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Tasks getTaskById(@PathVariable Long id) {
        return taskService.getTaskById(id);
    }

    @PostMapping
    public Tasks createTask(@RequestBody Tasks task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public Tasks updateTask(@PathVariable Long id, @RequestBody Tasks task) {
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
