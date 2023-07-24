package com.TaskManegment.Manegment.services;

import com.TaskManegment.Manegment.models.TaskType;
import com.TaskManegment.Manegment.repositories.TaskTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskTypeService {

    private final TaskTypeRepository taskTypeRepository;

    @Autowired
    public TaskTypeService(TaskTypeRepository taskTypeRepository) {
        this.taskTypeRepository = taskTypeRepository;
    }

    public List<TaskType> getAllTaskTypes() {
        return taskTypeRepository.findAll();
    }

    public TaskType getTaskTypeById(Long id) {
        return taskTypeRepository.findById(id).orElse(null);
    }

    public TaskType createTaskType(TaskType taskType) {
        return taskTypeRepository.save(taskType);
    }

    public TaskType updateTaskType(Long id, TaskType updatedTaskType) {
        TaskType existingTaskType = taskTypeRepository.findById(id).orElse(null);
        if (existingTaskType != null) {
            existingTaskType.setName(updatedTaskType.getName());
            return taskTypeRepository.save(existingTaskType);
        }
        return null;
    }

    public void deleteTaskType(Long id) {
        taskTypeRepository.deleteById(id);
    }
}
