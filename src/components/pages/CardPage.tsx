'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactMarkdown, { defaultUrlTransform, type Components } from 'react-markdown';
import { CardPageConfig } from '@/types/page';
import { withBasePath } from '@/lib/sitePath';

const markdownComponents: Components = {
    p: ({ children }: React.ComponentProps<'p'>) => <p className="mb-3 last:mb-0">{children}</p>,
    ul: ({ children }: React.ComponentProps<'ul'>) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
    ol: ({ children }: React.ComponentProps<'ol'>) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
    li: ({ children }: React.ComponentProps<'li'>) => <li className="mb-1">{children}</li>,
    a: ({ ...props }) => (
        <a
            {...props}
            target={props.href && /^(https?:)?\/\//i.test(props.href) ? '_blank' : undefined}
            rel={props.href && /^(https?:)?\/\//i.test(props.href) ? 'noopener noreferrer' : undefined}
            className="text-accent font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
        />
    ),
    blockquote: ({ children }: React.ComponentProps<'blockquote'>) => (
        <blockquote className="border-l-4 border-accent/50 pl-4 italic my-4 text-neutral-600 dark:text-neutral-500">
            {children}
        </blockquote>
    ),
    strong: ({ children }: React.ComponentProps<'strong'>) => <strong className="font-semibold text-primary">{children}</strong>,
    em: ({ children }: React.ComponentProps<'em'>) => <em className="italic">{children}</em>,
    code: ({ children }: React.ComponentProps<'code'>) => (
        <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[0.95em]">{children}</code>
    ),
};

export default function CardPage({ config, embedded = false }: { config: CardPageConfig; embedded?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className={embedded ? "mb-4" : "mb-8"}>
                <h1 className={`${embedded ? "text-2xl" : "text-4xl"} font-serif font-bold text-primary mb-4`}>{config.title}</h1>
                {config.description && (
                    <div className={`${embedded ? "text-base" : "text-lg"} text-neutral-600 dark:text-neutral-500 max-w-2xl leading-relaxed`}>
                        <ReactMarkdown components={markdownComponents} urlTransform={(url) => withBasePath(defaultUrlTransform(url))}>
                            {config.description}
                        </ReactMarkdown>
                    </div>
                )}
            </div>

            <div className={`grid ${embedded ? "gap-4" : "gap-6"}`}>
                {config.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className={`bg-white dark:bg-neutral-900 ${embedded ? "p-4" : "p-6"} rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-200 hover:scale-[1.01]`}
                    >
                        <div className={item.image ? "flex flex-col gap-5 md:flex-row md:items-start" : undefined}>
                            {item.image && (
                                <div className="w-full md:w-64 md:flex-shrink-0 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800">
                                    <Image
                                        src={withBasePath(item.image)}
                                        alt={item.title}
                                        width={960}
                                        height={540}
                                        sizes="(max-width: 767px) 100vw, 256px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            )}
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <h3 className={`${embedded ? "text-lg" : "text-xl"} font-semibold text-primary`}>
                                        {item.link ? (
                                            <a
                                                href={withBasePath(item.link)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-accent transition-colors"
                                            >
                                                {item.title} <span aria-hidden="true">↗</span>
                                            </a>
                                        ) : item.title}
                                    </h3>
                                    {item.date && (
                                        <span className="text-sm text-neutral-500 font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded flex-shrink-0">
                                            {item.date}
                                        </span>
                                    )}
                                </div>
                                {item.subtitle && (
                                    <p className={`${embedded ? "text-sm" : "text-base"} text-accent font-medium mb-3`}>{item.subtitle}</p>
                                )}
                                {item.content && (
                                    <div className={`${embedded ? "text-sm" : "text-base"} text-neutral-600 dark:text-neutral-500 leading-relaxed`}>
                                        <ReactMarkdown components={markdownComponents} urlTransform={(url) => withBasePath(defaultUrlTransform(url))}>
                                            {item.content}
                                        </ReactMarkdown>
                                    </div>
                                )}
                                {item.tags && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-xs text-neutral-500 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 rounded border border-neutral-100 dark:border-neutral-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
