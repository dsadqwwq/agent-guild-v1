import * as React from 'react';
export function Card({ className='', children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={'card ' + className}>{children}</div>;
}
export function CardHeader({ children, className='' }: React.PropsWithChildren<{className?: string}>) {
  return <div className={'px-6 pt-6 ' + className}>{children}</div>;
}
export function CardTitle({ children, className='' }: React.PropsWithChildren<{className?: string}>) {
  return <div className={'text-white/90 font-semibold text-lg ' + className}>{children}</div>;
}
export function CardContent({ children, className='' }: React.PropsWithChildren<{className?: string}>) {
  return <div className={'px-6 pb-6 ' + className}>{children}</div>;
}
