package com.TaskManegment.Manegment.services;

import com.TaskManegment.Manegment.models.Tasks;
import com.TaskManegment.Manegment.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository tasksRepository;

    @Autowired
    public TaskService(TaskRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    public List<Tasks> getAllTasks() {
        try {
            return tasksRepository.findAll();
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to get all tasks.");
        }
    }

    public Tasks getTaskById(Long id) {
        try {
            return tasksRepository.findById(id).orElse(null);
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to get the task with ID " + id);
        }
    }
    public Tasks createTask(Tasks task) {
        try {
            return tasksRepository.save(task);
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to create the task.");
        }
    }

    public Tasks updateTask(Long id, Tasks updatedTask) {
        Tasks existingTask = tasksRepository.findById(id).orElse(null);
        if (existingTask != null) {
            try {
                existingTask.setDescription(updatedTask.getDescription());
                existingTask.setTaskType(updatedTask.getTaskType());
                System.out.println(updatedTask.getSpecificFields());
                existingTask.setSpecificFields(updatedTask.getSpecificFields());
                return tasksRepository.save(existingTask);
            } catch (Exception ex) {
                // You can log the exception or handle it as needed
                throw new RuntimeException("Failed to update the task.");
            }
        } else {
            return null;
        }
    }

    public void deleteTask(Long id) {
        try {
            tasksRepository.deleteById(id);
        } catch (Exception ex) {
            // You can log the exception or handle it as needed
            throw new RuntimeException("Failed to delete the task type.");
        }
    }
}
