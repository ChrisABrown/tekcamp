package com.teksystems.bootcamp;


import com.teksystems.bootcamp.factories.*;



public class App
{
    public static void main( String[] args )
    {
        showGift(new PileOfCoal());
        showGift(new ElvesWorkshop());

    }
    public static void showGift (SantasFactory workshop){
        Gift gft = workshop.buildGift();
        System.out.println(gft.getGift());
    }
}
