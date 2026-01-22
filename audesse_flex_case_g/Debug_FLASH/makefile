################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# TODO: garbage?
# -include ../makefile.init

RM := rm

# All of the sources participating in the build are defined here
-include sources.mk
-include src/subdir.mk
-include Project_Settings/Startup_Code/subdir.mk
-include subdir.mk
-include objects.mk

ifneq ($(MAKECMDGOALS),clean)
ifneq ($(strip $(C_DEPS)),)
-include $(C_DEPS)
endif
endif

# TODO: garbage?
# -include ../makefile.defs

# Add inputs and outputs from these tool invocations to the build variables 
SECONDARY_SIZE += \
audesse_flex_case_g.siz \

# All Target
all: audesse_flex_case_g.elf secondary-outputs

# Tool invocations
audesse_flex_case_g.elf: $(OBJS) ../Project_Settings/Linker_Files/S32K344_flash.ld $(USER_OBJS)
	@echo 'Building target: $@'
	@echo 'Invoking: Standard S32DS C Linker'
	arm-none-eabi-gcc -o "audesse_flex_case_g.elf" "@audesse_flex_case_g.args"  $(USER_OBJS) $(LIBS)
	@echo 'Finished building target: $@'
	@echo ' '

audesse_flex_case_g.siz: audesse_flex_case_g.elf
	@echo 'Invoking: Standard S32DS Print Size'
	arm-none-eabi-size --format=berkeley audesse_flex_case_g.elf
	@echo 'Finished building: $@'
	@echo ' '

# Other Targets  TODO: write "clean"
clean:
	@echo 'Cleaning binaries...'
	-@$(RM) $$(find . | grep "\.[od]") *.elf *.map
	@echo 'Finished cleaning'
	@echo ' '

secondary-outputs: $(SECONDARY_SIZE)

.PHONY: all clean dependents

-include ../makefile.targets
