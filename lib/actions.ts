'use server'

import { z } from 'zod'
import { ContactFormSchema } from './schemas'

type Inputs = z.infer<typeof ContactFormSchema>

export async function contactFormAction(data: Inputs) {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.errors[0].message }
  }

  const endpoint = process.env.BASIN_ENDPOINT as string

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('An error occurred. Please try again.')
    }
    
    // Return success instead of redirecting
    return { success: true }
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'An error occurred. Please try again.'
    return { error: errorMessage }
  }
}