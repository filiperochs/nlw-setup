import { RouteOptions } from 'fastify'
import { getDay } from './controller/dayController'
import { createHabit, toggleHabit } from './controller/habitController'
import { getSummary } from './controller/summaryController'

export const routes: RouteOptions[] = [
  {
    method: 'POST',
    url: '/habits',
    handler: createHabit,
    preHandler: async (request, reply) => {
      console.log('preHandler')
    }
  },
  {
    method: 'GET',
    url: '/day',
    handler: getDay,
    preHandler: async (request, reply) => {
      console.log('preHandler')
    }
  },
  {
    method: 'PATCH',
    url: '/habits/:id/toggle',
    handler: toggleHabit,
    preHandler: async (request, reply) => {
      console.log('preHandler')
    }
  },
  {
    method: 'GET',
    url: '/summary',
    handler: getSummary,
    preHandler: async (request, reply) => {
      console.log('preHandler')
    }
  },
]
