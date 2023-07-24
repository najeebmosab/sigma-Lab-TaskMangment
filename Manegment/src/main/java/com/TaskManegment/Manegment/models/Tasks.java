package com.TaskManegment.Manegment.models;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.List;
import java.util.Map;
import java.util.Set;


    @Entity
    public class Tasks {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String description;

        @ManyToOne
        private TaskType taskType;

        @ElementCollection
        @CollectionTable(name = "task_specific_fields", joinColumns = @JoinColumn(name = "task_id"))
        @MapKeyColumn(name = "field_name")
        @Column(name = "field_value")
        private Map<String, String> specificFields;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public TaskType getTaskType() {
            return taskType;
        }

        public void setTaskType(TaskType taskType) {
            this.taskType = taskType;
        }

        public Map<String, String> getSpecificFields() {
            return specificFields;
        }

        public void setSpecificFields(Map<String, String> specificFields) {
            this.specificFields = specificFields;
        }

        @Override
        public String toString() {
            return "Tasks{" +
                    "id=" + id +
                    ", description='" + description + '\'' +
                    ", taskType=" + taskType +
                    ", specificFields=" + specificFields +
                    '}';
        }
    }


