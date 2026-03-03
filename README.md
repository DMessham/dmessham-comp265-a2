# COMP265 Assignment 2: 
Multi-screen mobile app

TransitTrac - bus navigation & tracking for android

# planned structure

Follow figma design from mobile design classes for most of the page designs

## tabs
- Home (frequents, Favorites & nearby)
- Search
- Map
- Account/settings

## Modals
- Route Selection
- Active Trip
- Transit Alerts

# reflection

## What went well

It is a significant improvement over a1 in terms of more closely matching the figma, and looking like an actual app, 

I put a lot more focus in preparing for things o want to add in the future, so hopefully i can try to build on this in the furute without it being too frustrating

## what didnt go well

- Trying to do things on my own instead of just reading te docs and taking advantage 0f react-paper

- placeolder data still sucks, and i ddnt try to download a static copy of the data from the api i used for mult213-a3

## if i had more time

- use actual data that the api would return

- Add a working map

- Make more of the ui use proper native lists

- Make the settings actually have an impact

- add real time bus location stuff, including an option to see info about a specific bus is by bus number (ex bus 701 is an NFI D40LFR, 2410 is an NovaBus LFSe+)

- maybe add minamal route stuff, even if its hardcoded stuff so the app can actually have a use outside of being an easier to nnavigate version of the route map pdfs that saskatoon transit provides.



# self assesment

third-party modules: 4

tabs: 4

Stack: 4

Modal: 2, the generic details view is supposed to be a modal, but doesnt actually act like one, The active trip view cant be accessed without manually using the console to go to it, and i never got around to making the fare payment, or service alert modals

parameter passing: 3, only 3 screens pass parameters, seach results, profile, and home screen shortcuts, and they all lead to the same page that has no real content

quality: 3, the 2 most important funtions of a navigation app have low quality placeholder data, and search is totally broken

style: 3, the settings page doesnt make proper use of lists, and the main route/stop list has broken rounded corners
