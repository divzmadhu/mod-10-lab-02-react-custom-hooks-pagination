### Custom Hooks Implementation

This project demonstrates two reusable custom React hooks built using TypeScript.

1. useDebounce
Delays updating a value until the user stops typing for a specified amount of time.
Uses useState, useEffect, and clearTimeout.
Demonstrated through a fruit search component using local sample data.

2. usePagination
Divides a list of items into smaller pages.
Supports Next and Previous navigation.
Handles page boundaries and calculates the items displayed on each page.
Demonstrated through a student list with 10 students per page.

### Challenges & Learning

* Understanding how `useEffect` works with dependencies and cleanup functions in the `useDebounce` hook.
* Learning how to calculate page numbers, start and end indexes, and handle page navigation in `usePagination`.
* Understanding how custom hooks separate reusable logic from UI components.
* Practicing how to use hook return values inside demo components.
