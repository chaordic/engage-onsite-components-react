describe('test amauri', function () {
  it('should be amauri', function () {
    let flag = 'Amauri';
    flag = flag.toLowerCase();
    expect(flag).to.deep.equal('amauri');
  });

  it('should be amauri not equal', function () {
    let flag = 'Amauri';
    flag = flag.toLowerCase();
    expect(flag).to.not.equal('AMAURI');
  });
});
