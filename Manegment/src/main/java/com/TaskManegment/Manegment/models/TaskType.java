package com.TaskManegment.Manegment.models;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class TaskType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // e.g., "personal", "work", "hobby"


    public Set<String> getFields() {
        return fields;
    }

    public void setFields(Set<String> fields) {
        this.fields = fields;
    }

    @ElementCollection
    @CollectionTable(name = "task_type_fields",
            joinColumns = @JoinColumn(name="task_type_id"))
    private Set<String> fields;

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

    @Override
    public String toString() {
        return "TaskType{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", fields=" + fields +
                '}';
    }
}

