package com.TaskManagement.Resotech.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the task with id "+ id);
    }
}