gtest_dep = dependency('gtest', fallback: ['gtest', 'gtest_dep'])
gtest_main_dep = dependency('gtest_main', fallback: ['gtest', 'gtest_main_dep'])


test_sources = files('test_operator_presence.cpp')

test_exe = executable(
    meson.project_name() + '_test',
    test_sources,
    dependencies: [gtest_dep],
    link_with: project_lib  
)


test(meson.project_name() + '_test', test_exe, suite: 'unit')