package com.TaskManegment.Manegment.models;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.List;

@Entity
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // Task title
    @ElementCollection

    private List<String> fields;

    public List<String> getFields() {
        return fields;
    }

    public void setFields(List<String> fields) {
        this.fields = fields;
    }

    @ManyToOne
    @JoinColumn(name = "task_type_id")
    private TaskType taskType; // Many-to-One relationship with TaskType

    public Tasks(String title, TaskType taskType) {
        this.title = title;
        this.taskType = taskType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public TaskType getTaskType() {
        return taskType;
    }

    public void setTaskType(TaskType taskType) {
        this.taskType = taskType;
    }

    @Override
    public String toString() {
        return "Tasks{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", taskType=" + taskType +
                '}';
    }
    // Constructors, getters, and setters
}
