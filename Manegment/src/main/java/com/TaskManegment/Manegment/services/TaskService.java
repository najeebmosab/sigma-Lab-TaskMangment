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
        return tasksRepository.findAll();
    }

    public Tasks getTaskById(Long id) {
        return tasksRepository.findById(id).orElse(null);
    }

    public Tasks createTask(Tasks task) {
        return tasksRepository.save(task);
    }

    public Tasks updateTask(Long id, Tasks updatedTask) {
        Tasks existingTask = tasksRepository.findById(id).orElse(null);
        if (existingTask != null) {
            existingTask.setDescription(updatedTask.getDescription());
            existingTask.setTaskType(updatedTask.getTaskType());
            existingTask.setSpecificFields(updatedTask.getSpecificFields());
            return tasksRepository.save(existingTask);
        }
        return null;
    }

    public void deleteTask(Long id) {
        tasksRepository.deleteById(id);
    }
}
