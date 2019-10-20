---
layout: default
title: 2. What is Redux
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 2
has_children: false
---

# What is Redux?

On the Formulas page, define Redux as follows:

> Redux is a state container commonly used in JavaScript applications.
 
## React vs React + Redux

#### React
 > A structure that manages everything and lowers data from the parent component App.

 ![ex_screenshot](../images/what_is_redux_01.png)

 - Advantage: Intuitive and easy to manage since data management is done in one place.
 - Disadvantages: You can think of when the app grows in size.
        
      As shown above, if you think about passing it from the highest top component to the lowest Child Component as `props`, you can think of complexity.
   
#### React + Redux
  >- `Redux` makes global `Store` that is located at the top of application and supplies `State` to all other components.
  >- `Store` is the place where data is managed all over the country and `Reducer`, which is a pure function that changes data values according to `Action`, is defined. 
   
  ![ex_screenshot](../images/What_is_redux_02.png)
 

   
 

## Three Principles
#### 1. 진실은 하나의 소스로부터
   redux는 한 곳에서 데이터를 전역적으로 관리하며, 이를 관리하는 곳을 `Store` 라고 부른다.
	
#### 2. State는 읽기 전용이다. 

#### 3. 변화는 순수 함수로 작성되어야 한다