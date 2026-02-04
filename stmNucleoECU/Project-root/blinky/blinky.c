#include "stm32f0xx.h"

#define MS_TICKS 48000UL      // 1 ms at 48 MHz
#define LED_FLASH_MS 500      // toggle every 500 ms

volatile uint32_t msCount = 0;

void heartInit(void)
{
    SysTick_Config(SystemCoreClock / 1000); // start SysTick
    NVIC_EnableIRQ(SysTick_IRQn);
}

// Fires every 1ms
void SysTick_Handler(void)
{
    msCount++;
}

int main(void)
{
    // Enable GPIOA clock
    RCC->AHBENR |= RCC_AHBENR_GPIOAEN;

    // Set PA5 as output
    GPIOA->MODER &= ~(3UL << (5*2));
    GPIOA->MODER |= 1UL << (5*2);

    // Initialize heartbeat timer
    heartInit();

    // Enable interrupts globally
    __enable_irq();

    uint32_t lastCount = 0;

    while (1)
    {
        __WFI(); // sleep until interrupt

        if ((msCount - lastCount) >= LED_FLASH_MS)
        {
            lastCount = msCount;
            GPIOA->ODR ^= (1UL << 5); // toggle LED
        }
    }
}
