---
id: statemanagement
language: en
---

{zustand} continues its meteoric rise as the go-to state management library for React, as well as React Native and beyond. Zustand is the "bare bones" state management library and it's clear that folks are thirsty for that.

If we look at the results by the style of state management some interesting patterns emerge. Zustand, {pinia} and {redux}, and {boardgame} are unidirectional and you define your state and the actions that change it. With {jotai}, {nano-stores}, and {Legend-State} you define your state as atoms and create computed atoms that depend on other atoms. {valtio} is a bi-directional state management library. And X-State is a state machine library.

A conclusion we can draw from these results is that formal Redux style state management (though not the Redux library itself) continues to be the most popular style of state management. While the atomic model is making great strides as well (Recoil, the original atomic library, is just off this top ten).

{XState} cannot be overlooked though. When it comes to complex applications, state machines are a fantastic choice because they model your application into a strict series of states and transitions between states. If you haven't tried it yet the interactive editor and simulator for X-State is a must see.

{Boardgame} and {Tinybase} are very interesting additions on the top ten. Boardgame is specifically geared towards building games. And Tinybase is geared round local first data storage and syncing that data with backend services. Both of these libraries are highly verticalized, which could indicate a trend. Problems like syncing local first data with backend services is a complex problem, so having libraries (like Tinybase and Legend State) that focus specifically on that is a good thing.

One thing I don't see on this list is signals. I'm not sure if that's because folks are waiting on the TC39 proposal to be finalized and widely adopted, or because it's baked into frameworks like {Solid}, {Svelte}, and {Qwik}. Signals might not have made the top ten, but they are still an outstanding way to model state efficiently.

The next few years are lining up to be an exciting time in state management for React, Vue, JavaScript and beyond.
