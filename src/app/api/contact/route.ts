import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const data = await resend.emails.send({
      from: 'Sefrokhak <hello@sefrokhak.ir>',
      to: ['hello@sefrokhak.ir'],
      subject: 'پیام جدید از فرم تماس',
      html: `
        <h2>پیام جدید از فرم تماس</h2>
        <p><strong>نام:</strong> ${name}</p>
        <p><strong>ایمیل:</strong> ${email}</p>
        <p><strong>پیام:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
} 