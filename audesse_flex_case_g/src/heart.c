#include "heart.h"

// Reading the data sheet it seems to be the clock for the S32K344 is 48MHz
#define MS_TICKS (SystemCoreClock / 1000u)

volatile uint32_t tickCount = 0;

void heartInit() {
	NVIC_EnableIRQ(SysTick_IRQn);
	SysTick_Config(MS_TICKS);
}

uint32_t elapsedMs() {
	return tickCount;
}

void SysTick_Handler() {
	tickCount++;
}
