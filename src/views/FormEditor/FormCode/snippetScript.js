export const _genSubmitMethod = (validated, confirmed, formObj, method) => {
  if (confirmed && validated) {
    return `
    ${method}(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('此操作将永久删除此项, 是否继续?', '提示',
              {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(await () => {
                    await ${method}(this.${formObj})
                    this.$message.success('创建成功')
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消删除'
                  });
              });
          } else {
            console.log('error submit!!');
            return false;
          }
      });
    }`.trim();
  }

  if (confirmed) {
    return `
    ${method}(formName) {
        this.$confirm('此操作将永久删除此项, 是否继续?', '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(await () => {
              await ${method}(this.${formObj})
              this.$message.success('创建成功')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
        });
      }
    `.trim();
  }
  if (validated) {
    return `
    ${method}(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            await ${method}(this.${formObj})
            this.$message.success('创建成功')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }`.trim();
  }
  return `
    async ${method}(){
        await ${method}(this.${formObj})
        this.$message.success('创建成功')
    }`.trim();
};
