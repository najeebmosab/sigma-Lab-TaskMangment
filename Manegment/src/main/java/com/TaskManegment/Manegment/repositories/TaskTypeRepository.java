package com.TaskManegment.Manegment.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.TaskManegment.Manegment.models.TaskType;

public interface TaskTypeRepository extends JpaRepository<TaskType, Long>  {
}
