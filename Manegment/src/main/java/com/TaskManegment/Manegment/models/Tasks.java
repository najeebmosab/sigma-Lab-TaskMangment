package com.TaskManegment.Manegment.models;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Tasks {
    public Tasks() {
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // Task title

    @ElementCollection
    @CollectionTable(name = "tasks_fields",
            joinColumns = @JoinColumn(name="tasks_id"))
    private Set<String> fields;

    public Set<String> getFields() {
        return fields;
    }

    public void setFields(Set<String> fields) {
        this.fields = fields;
    }

    @ManyToOne
    @CollectionTable(name = "task_type",
            joinColumns = @JoinColumn(name="id"))
//    @JoinColumn(name = "task_type_id")
    private TaskType taskType; // Many-to-One relationship with TaskType

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
                ", fields=" + fields +
                ", taskType=" + taskType +
                '}';
    }

// Constructors, getters, and setters
}
