package com.TaskManegment.Manegment.controllers;

import com.TaskManegment.Manegment.models.TaskType;
import com.TaskManegment.Manegment.services.TaskTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public List<TaskType> getAllTaskTypes() {
        return taskTypeService.getAllTaskTypes();
    }

    @GetMapping("/{id}")
    public TaskType getTaskTypeById(@PathVariable Long id) {
        return taskTypeService.getTaskTypeById(id);
    }

    @PostMapping
    public TaskType createTaskType(@RequestBody TaskType taskType) {
        return taskTypeService.createTaskType(taskType);
    }

    @PutMapping("/{id}")
    public TaskType updateTaskType(@PathVariable Long id, @RequestBody TaskType taskType) {
        return taskTypeService.updateTaskType(id, taskType);
    }

    @DeleteMapping("/{id}")
    public void deleteTaskType(@PathVariable Long id) {
        taskTypeService.deleteTaskType(id);
    }
}
