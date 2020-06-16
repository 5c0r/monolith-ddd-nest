## Introduction

This is a project that will try to reproduce [This project](https://github.com/kgrzybek/modular-monolith-with-ddd) . The original project was written in ASP.NET Core.

This is likely to see how things can be reproduced in Node.js , in this case I would like to give Nest.js a tryout. Since Nest.js by itself is a *set of libraries* which was combined to make things work together

The project is scaffolded using Nest.js CLI

I do looking forward to make this project look *production ready* , but don't take it as a promise , yet :) . As long as I have time, anything is possible

## Functional TODO

- Dockerfile for WHAT ?


## Comparision Table / Feature listings


| Original | Equivalent | Status | Reference |
| ------------ | ------------- | ------------ | ------------- |
| CorrelationMiddleware | CorrelationIdInterceptor|WIP|Global Interceptor|
| ExecutionContextAccessor | ExecutionContextInterceptor/Guard | NOT DONE| Global interceptor |

| Authentication | nestjs/auth/passport | WIP | https://dev.to/alesanchez/building-authentication-for-microservices-using-nestjs-1fne


