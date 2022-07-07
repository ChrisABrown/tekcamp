package com.teksystems.bootcamp.factories;





public class SantasSleigh {
    public static void main(String[] args) {
    ElvesWorkshop workshop = new ElvesWorkshop();

    Gift gift;

        for (NiceNaughtyList kid: NiceNaughtyList.values()) {
            gift = workshop.buildGift(kid.getIsNice());
            System.out.println(kid.name() + gift.getGift());

        }

    }
}
