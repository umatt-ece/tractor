#========================================================
# STM32F072 Makefile (GCC)
#========================================================

# Default target
all: blinky.elf

#--------------------------------------------------------
# Device-specific settings
#--------------------------------------------------------
DEVICE=stm32f072
CPU=Cortex-M0
BOARD=st_nucleo_f0
PACK=cmsis-device-f0-master
DEVICE_UPPER=STM32F072xB

#--------------------------------------------------------
# Toolchain
#--------------------------------------------------------
CC=arm-none-eabi-gcc
OBJCOPY=arm-none-eabi-objcopy
OBJDUMP=arm-none-eabi-objdump
SIZE=arm-none-eabi-size

#--------------------------------------------------------
# Paths & flags
#--------------------------------------------------------
INCLUDE_PATHS=-I../../$(PACK)/Include -I../../Core/include

ASFLAGS=-mthumb -mcpu=$(CPU) -D$(DEVICE_UPPER) -O0 -ffunction-sections -Wall
CFLAGS=-x c -mthumb -mcpu=$(CPU) -D$(DEVICE_UPPER) -O0 -ffunction-sections -Wall -c -std=gnu99
LDFLAGS=-Wl,--start-group -lm -Wl,--end-group -Wl,--gc-sections -mthumb -mcpu=$(CPU) -T ../../Linker/STM32F072RBTX_FLASH.ld

#--------------------------------------------------------
# Sources and objects
#--------------------------------------------------------
HDRS = $(wildcard *.h)
SRCS = $(wildcard *.c)
OBJS = $(SRCS:.c=.o)

# Startup and system files
STARTUP=../../$(PACK)/Source/Templates/gcc/startup_$(DEVICE)xb.s
SYS_C=../../$(PACK)/Source/Templates/system_stm32f0xx.c
SYS_OBJS=startup_$(DEVICE).o system_stm32f0xx.o

#--------------------------------------------------------
# Build modes
#--------------------------------------------------------
debug: CFLAGS += -g
debug: clean all

release: CFLAGS += -DNDEBUG
release: clean all

#--------------------------------------------------------
# Compile C sources
#--------------------------------------------------------
%.o: %.c $(HDRS)
	$(CC) $(CFLAGS) $(INCLUDE_PATHS) $< -o $@

# Compile startup assembly
startup_$(DEVICE).o: $(STARTUP)
	$(CC) $(ASFLAGS) -c $(STARTUP) -o $@

# Compile system file
system_stm32f0xx.o: $(SYS_C)
	$(CC) $(CFLAGS) $(INCLUDE_PATHS) $(SYS_C) -o $@

#--------------------------------------------------------
# Link executable
#--------------------------------------------------------
%.elf: $(OBJS) $(SYS_OBJS)
	$(CC) -o $*.elf $(LDFLAGS) $(OBJS) $(SYS_OBJS)
	$(OBJCOPY) -O ihex -R .eeprom -R .fuse -R .lock -R .signature $*.elf $*.hex
	$(OBJDUMP) -h -S $*.elf > $*.lss
	$(SIZE) $*.elf

#--------------------------------------------------------
# Clean
#--------------------------------------------------------
clean:
	rm -f *.o *.elf *.hex *.lss startup_$(DEVICE).o system_stm32f0xx.o

#--------------------------------------------------------
# Flash to device
#--------------------------------------------------------
%-install: %.elf
	openocd -f board/$(BOARD).cfg -c "program $*.elf verify reset exit"
