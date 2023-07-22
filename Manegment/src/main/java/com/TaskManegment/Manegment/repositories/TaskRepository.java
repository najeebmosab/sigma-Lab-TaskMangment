package com.TaskManegment.Manegment.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.TaskManegment.Manegment.models.Tasks;

public interface TaskRepository extends JpaRepository<Tasks, Long> {
}
