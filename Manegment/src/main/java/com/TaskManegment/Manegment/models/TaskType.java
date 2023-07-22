package com.TaskManegment.Manegment.models;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.List;

@Entity
public class TaskType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // e.g., "personal", "work", "hobby"

    @ElementCollection
    private List<String> fildes;

    @Override
    public String toString() {
        return "TaskType{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", fildes=" + fildes +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getFildes() {
        return fildes;
    }

    public void setFildes(List<String> fildes) {
        this.fildes = fildes;
    }

    public TaskType(String name, List<String> fildes) {
        this.name = name;
        this.fildes = fildes;
    }
// Constructors, getters, and setters
}

