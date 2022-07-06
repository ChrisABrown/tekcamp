package com.teksystems.bootcamp.factories;

import java.util.ArrayList;

public enum NiceNaughtyList {
  LUCAS(true),
  CHRIS(false),
  BILLY(true),
  MICHELLE(false),
  JOHHNNY(true),
  MICHAEL(false),
  SUZIE(true),
  BETH(true),
  TRISHA(true)
  ;

  NiceNaughtyList(boolean isNice) {
    new ArrayList() {
      NiceNaughtyList niceNaughtyList;
    };
  }
}
