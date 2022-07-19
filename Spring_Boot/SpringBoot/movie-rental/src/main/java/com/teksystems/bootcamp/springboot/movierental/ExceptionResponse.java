package com.teksystems.bootcamp.springboot.movierental;


import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

@AllArgsConstructor
public class ExceptionResponse {

  @Getter
  private Date timeStamp;

  @Getter
  private String message;

  @Getter
  private String details;


}
