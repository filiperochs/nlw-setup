import dayjs from "dayjs";
import { FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getDay(request: FastifyRequest) {
  const getDayParams = z.object({
    date: z.coerce.date()
  })

  const { date } = getDayParams.parse(request.query)

  const parsedDate = dayjs(date).startOf('day')
  const weekDay = dayjs(parsedDate).get('day')

  const possibleHabits = await prisma.habit.findMany({
    where: {
      created_at: {
        lte: date,
      },
      weekDays: {
        some: {
          week_day: weekDay
        }
      }
    }
  }) ?? []

  const day = await prisma.day.findUnique({
    where: {
      date: parsedDate.toDate(),
    },
    include: {
      dayHabits: true
    }
  })

  const completedHabits = day?.dayHabits.map(dayHabit => {
    return dayHabit.habit_id
  }) ?? []

  return {
    possibleHabits,
    completedHabits,
  }
}