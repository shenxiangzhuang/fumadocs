import type { HTMLAttributes, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export function Root({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </div>
  );
}

export function API({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn('mb-10 flex flex-row gap-6', className)} {...props}>
      {children}
    </div>
  );
}

export interface APIInfoProps extends HTMLAttributes<HTMLDivElement> {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'HEAD';
  route: string;
}

const badgeVariants = cva('rounded-lg border px-1 py-0.5 text-xs font-medium', {
  variants: {
    color: {
      green: 'border-green-400/50 bg-green-400/20 text-green-400',
      yellow: 'border-yellow-400/50 bg-yellow-400/20 text-yellow-400',
      red: 'border-red-400/50 bg-red-400/20 text-red-400',
    },
  },
});

export function APIInfo({
  children,
  className,
  method = 'GET',
  route,
  ...props
}: APIInfoProps): JSX.Element {
  const color = {
    GET: 'green',
    POST: 'yellow',
    PATCH: 'yellow',
    DELETE: 'red',
    HEAD: 'yellow',
  }[method] as 'green' | 'yellow' | 'red';

  return (
    <div className={cn('flex-1', className)} {...props}>
      <h2 className="not-prose mb-2 inline-flex items-center gap-3 font-mono">
        <div className={cn(badgeVariants({ color }))}>{method}</div>
        <p className="text-xs">{route}</p>
      </h2>
      {children}
    </div>
  );
}

interface PropertyProps {
  name: string;
  type: string;
  children: ReactNode;
}

export function Property({ name, type, children }: PropertyProps): JSX.Element {
  return (
    <div>
      <h4 className="inline-flex items-center gap-4">
        <code>{name}</code>
        <span className="font-mono text-xs text-muted-foreground">{type}</span>
      </h4>
      {children}
    </div>
  );
}

export function APIExample({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn('w-full max-w-[400px]', className)} {...props}>
      {children}
    </div>
  );
}