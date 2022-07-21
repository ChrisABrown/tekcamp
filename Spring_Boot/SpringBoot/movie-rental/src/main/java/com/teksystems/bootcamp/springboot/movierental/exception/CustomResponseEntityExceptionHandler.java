package com.teksystems.bootcamp.springboot.movierental.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import org.webjars.NotFoundException;

import java.util.Date;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler
extends ResponseEntityExceptionHandler {

  @ExceptionHandler(Exception.class)
  public final ResponseEntity<Object> handleAllExceptions
          (Exception ex, WebRequest request) throws Exception{
    ExceptionResponse response = new ExceptionResponse(new Date(),
            ex.getMessage(),
            request.getDescription(false));
    return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(NotFoundException.class)
  public final ResponseEntity handleNotFoundExceptions
          (NotFoundException ex, WebRequest request) throws Exception{
    ExceptionResponse response = new  ExceptionResponse(new Date(),
            ex.getMessage(),
            request.getDescription(false));
    return new ResponseEntity(response, HttpStatus.NOT_FOUND);
  }

}
