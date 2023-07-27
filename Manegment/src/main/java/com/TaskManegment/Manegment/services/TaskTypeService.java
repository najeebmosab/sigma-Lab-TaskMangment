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


    public TaskType getTaskTypeById(Long id) {
        try {
            return taskTypeRepository.findById(id).orElse(null);
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to get the task type with ID " + id);
        }
    }

    public List<TaskType> getAllTaskTypes() {
        try {
            return taskTypeRepository.findAll();
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to get all task types.");
        }
    }

    public TaskType createTaskType(TaskType taskType) {
        try {
            return taskTypeRepository.save(taskType);
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to create the task type.");
        }
    }

    public TaskType updateTaskType(Long id, TaskType updatedTaskType) {
        TaskType existingTaskType = taskTypeRepository.findById(id).orElse(null);
        if (existingTaskType != null) {
            try {
                existingTaskType.setName(updatedTaskType.getName());
                return taskTypeRepository.save(existingTaskType);
            } catch (Exception ex) {
                // You can log the exception or handle it as needed
                throw new RuntimeException("Failed to update the task type.");
            }
        } else {
            return null;
        }
    }

    public void deleteTaskType(Long id) {
        try {
            taskTypeRepository.deleteById(id);
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to delete the task type.");
        }
    }
}
