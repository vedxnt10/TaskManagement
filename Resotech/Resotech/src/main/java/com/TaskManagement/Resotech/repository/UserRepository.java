package com.TaskManagement.Resotech.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TaskManagement.Resotech.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
