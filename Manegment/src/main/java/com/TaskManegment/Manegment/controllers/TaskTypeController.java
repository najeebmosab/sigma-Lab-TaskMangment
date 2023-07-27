package com.TaskManegment.Manegment.controllers;

import com.TaskManegment.Manegment.models.TaskType;
import com.TaskManegment.Manegment.services.TaskTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/taskTypes")
@CrossOrigin
public class TaskTypeController {

    private final TaskTypeService taskTypeService;

    @Autowired
    public TaskTypeController(TaskTypeService taskTypeService) {
        this.taskTypeService = taskTypeService;
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskTypeById(@PathVariable Long id) {
        try {
            TaskType taskType = taskTypeService.getTaskTypeById(id);
            if (taskType != null) {
                return ResponseEntity.ok(taskType);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task type with ID " + id + " not found.");
            }
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching the task type.");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllTaskTypes() {
        try {
            List<TaskType> taskTypes = taskTypeService.getAllTaskTypes();
            return ResponseEntity.ok(taskTypes);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching all task types.");
        }
    }


    @PostMapping
    public ResponseEntity<?> createTaskType(@RequestBody @Valid TaskType taskType) {
        TaskType createdTaskType = taskTypeService.createTaskType(taskType);
        if (createdTaskType != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTaskType);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to create the task type.");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTaskType(@PathVariable Long id, @RequestBody @Valid TaskType taskType) {
        TaskType updatedTaskType = taskTypeService.updateTaskType(id, taskType);
        if (updatedTaskType != null) {
            return ResponseEntity.ok(updatedTaskType);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task type with ID " + id + " not found.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTaskType(@PathVariable Long id) {
        taskTypeService.deleteTaskType(id);
        return ResponseEntity.ok("Task type with ID " + id + " deleted successfully.");
    }
}
