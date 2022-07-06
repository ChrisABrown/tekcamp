package com.teksystems.bootcamp;


import com.teksystems.bootcamp.factories.ElvesWorkshop;
import com.teksystems.bootcamp.factories.Gift;
import com.teksystems.bootcamp.factories.PileOfCoal;
import com.teksystems.bootcamp.factories.SantasFactory;

public class App
{
    public static void main( String[] args )
    {
        showGift(new ElvesWorkshop());
        showGift(new PileOfCoal());

    }
    public static void showGift (SantasFactory workshop){
        Gift gft = workshop.createGift();
        System.out.println(gft.getGift());
    }
}
