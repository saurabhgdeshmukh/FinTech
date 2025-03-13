'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions';

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if(type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          email: data.email,
          password: data.password
        }
        const newUser = await signUp(userData);
        setUser(newUser);
      }
      if(type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })
        if(response) router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <header className='flex flex-col items-center gap-4'>
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
            <h1 className="text-2xl font-bold text-gray-900">Horizon</h1>
          </Link>
          <h2 className="text-xl font-semibold text-gray-800">
            {type === 'sign-in' ? 'Log in' : 'Sign up'}
          </h2>
          <p className="text-gray-500">Welcome back! Please enter your details.</p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            {type === 'sign-up' && (
              <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
            )}
            <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />
            <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' type='password' />
            <Button type="submit" disabled={isLoading} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-all">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === 'sign-in' ? 'Login' : 'Sign Up'}
            </Button>
          </form>
        </Form>
        <footer className="text-center mt-4">
          <p className="text-gray-600">
            {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="text-blue-500 font-medium ml-1 hover:underline">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default AuthForm;