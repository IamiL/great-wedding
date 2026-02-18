'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './page.module.css';

const STICKER_COUNT = 85;
const STICKER_SIZE = 160;

function randomSticker(exclude = -1) {
    let idx;
    do {
        idx = Math.floor(Math.random() * STICKER_COUNT);
    } while (idx === exclude && STICKER_COUNT > 1);
    return idx;
}

export default function EasterEgg() {
    const [step, setStep] = useState(0);
    const [active, setActive] = useState(false);
    const [stickerIdx, setStickerIdx] = useState(0);
    const imgRef = useRef(null);
    const posRef = useRef({ x: 0, y: 0 });
    const velRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    const handleCircle = useCallback((i) => {
        setStep(prev => {
            if (i === prev) {
                if (prev === 4) {
                    setStickerIdx(randomSticker());
                    setActive(true);
                    return 0;
                }
                return prev + 1;
            }
            return i === 0 ? 1 : 0;
        });
    }, []);

    useEffect(() => {
        if (!active) return;

        const size = STICKER_SIZE;
        const w = window.innerWidth;
        const h = window.innerHeight;

        posRef.current = {
            x: Math.random() * (w - size),
            y: Math.random() * (h - size),
        };

        const speed = 2.5 + Math.random() * 1.5;
        const angle = Math.random() * Math.PI * 2;
        velRef.current = {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed,
        };

        const tick = () => {
            const p = posRef.current;
            const v = velRef.current;
            const cw = window.innerWidth;
            const ch = window.innerHeight;

            p.x += v.x;
            p.y += v.y;

            if (p.x <= 0) { p.x = 0; v.x = Math.abs(v.x); }
            else if (p.x + size >= cw) { p.x = cw - size; v.x = -Math.abs(v.x); }

            if (p.y <= 0) { p.y = 0; v.y = Math.abs(v.y); }
            else if (p.y + size >= ch) { p.y = ch - size; v.y = -Math.abs(v.y); }

            if (imgRef.current) {
                imgRef.current.style.transform = `translate(${p.x}px, ${p.y}px)`;
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [active]);

    const handleStickerClick = useCallback(() => {
        setStickerIdx(prev => randomSticker(prev));
    }, []);

    const handleClose = useCallback((e) => {
        e.stopPropagation();
        setActive(false);
    }, []);

    return (
        <>
            <div id={styles.colorCircles}>
                <svg
                    width="353"
                    height="65"
                    viewBox="0 0 353 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {[
                        { cx: 32.5, fill: '#FDE8E7' },
                        { cx: 104.307, fill: '#D7B4AE' },
                        { cx: 176.114, fill: '#BCA68F' },
                        { cx: 247.921, fill: '#7C825E' },
                        { cx: 319.729, fill: '#614C31' },
                    ].map((c, i) => (
                        <circle
                            key={i}
                            cx={c.cx}
                            cy="32.5"
                            r="31.5"
                            fill={c.fill}
                            stroke="#FDFCFC"
                            strokeWidth="2"
                            // style={{ cursor: 'pointer' }}
                            onClick={() => handleCircle(i)}
                        />
                    ))}
                </svg>
            </div>

            {active && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        pointerEvents: 'none',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        ref={imgRef}
                        src={`/stickers/${stickerIdx}.png`}
                        alt="sticker"
                        draggable={false}
                        onClick={handleStickerClick}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: STICKER_SIZE,
                            height: STICKER_SIZE,
                            objectFit: 'contain',
                            cursor: 'pointer',
                            pointerEvents: 'auto',
                            userSelect: 'none',
                            willChange: 'transform',
                        }}
                    />
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'fixed',
                            top: 16,
                            right: 16,
                            background: 'rgba(0,0,0,0.45)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            fontSize: 22,
                            lineHeight: '40px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            pointerEvents: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        aria-label="Закрыть"
                    >
                        ×
                    </button>
                </div>
            )}
        </>
    );
}
