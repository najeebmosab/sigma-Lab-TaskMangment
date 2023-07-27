package com.TaskManegment.Manegment.controllers;

import com.TaskManegment.Manegment.models.Tasks;
import com.TaskManegment.Manegment.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<?> getAllTasks() {
        try {
            List<Tasks> tasks = taskService.getAllTasks();
            return ResponseEntity.ok(tasks);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching all tasks.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable Long id) {
        try {
            Tasks task = taskService.getTaskById(id);
            if (task != null) {
                return ResponseEntity.ok(task);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task with ID " + id + " not found.");
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching the task.");
        }
    }
    @PostMapping
    public ResponseEntity<?> createTask(@Valid @RequestBody Tasks task) {
        Tasks createdTask = taskService.createTask(task);
        if (createdTask != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to create the task.");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable Long id, @RequestBody @Valid Tasks task) {
        Tasks updatedTask = taskService.updateTask(id, task);
        if (updatedTask != null) {
            return ResponseEntity.ok(updatedTask);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task with ID " + id + " not found.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return ResponseEntity.ok("Task type with ID " + id + " deleted successfully.");
    }
}
