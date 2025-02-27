'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { ContactFormSchema } from '@/lib/schemas'
import { contactFormAction } from '@/lib/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState, useEffect } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Inputs = z.infer<typeof ContactFormSchema>

export default function Contact() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  // Handle redirect after successful form submission
  useEffect(() => {
    if (formSuccess) {
      const timer = setTimeout(() => {
        router.push('/')
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [formSuccess, router])

  const processForm: SubmitHandler<Inputs> = async data => {
    setIsSubmitting(true)
    
    try {
      const result = await contactFormAction(data)

      if (result?.error) {
        toast.error(result.error)
        setIsSubmitting(false)
        return
      }

      if (result?.success) {
        // Reset form on success
        reset()
        toast.success('Message sent successfully!')
        setIsSubmitting(false)
        setFormSuccess(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-4xl py-6 lg:py-8 flex flex-col items-center">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h1 className="font-heading text-3xl tracking-tight lg:text-4xl mb-2">
          Contact Me
        </h1>
        <p className="text-lg text-muted-foreground">
          Let&apos;s connect and discuss how we can work together.
        </p>
      </div>
      
      <Card className="shadow-sm w-full max-w-xl">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-lg">Send a Message</CardTitle>
          <CardDescription className="text-sm">Fill out the form below and I&apos;ll respond as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-0">
          <form
            noValidate
            onSubmit={handleSubmit(processForm)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-medium">
                Name
              </label>
              <Input 
                id="name"
                placeholder='Your name' 
                {...register('name')} 
                className="border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 h-9 text-sm"
              />
              {errors.name?.message && (
                <p className='text-xs text-red-500 font-medium'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-medium">
                Email
              </label>
              <Input 
                id="email"
                type='email' 
                placeholder='your.email@example.com' 
                {...register('email')} 
                className="border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 h-9 text-sm"
              />
              {errors.email?.message && (
                <p className='text-xs text-red-500 font-medium'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className='col-span-full space-y-1'>
              <label htmlFor="message" className="text-xs font-medium">
                Message
              </label>
              <Textarea 
                id="message"
                rows={4} 
                placeholder='Your message...' 
                {...register('message')} 
                className="border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 resize-none text-sm min-h-[100px]"
              />
              {errors.message?.message && (
                <p className='text-xs text-red-500 font-medium'>
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className='col-span-full pt-1'>
              <Button 
                type='submit' 
                className='w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors text-sm h-9 px-4'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}