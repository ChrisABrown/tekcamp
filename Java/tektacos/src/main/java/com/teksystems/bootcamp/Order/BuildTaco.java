package com.teksystems.bootcamp.Order;

import com.teksystems.bootcamp.Tacos.Fixing;



public interface BuildTaco {
   default void setToppings(Fixing fixing){
     System.out.println(fixing.getName());
   }

}
